const test = require('tape')
const raf = require('.')

test('simple', function (assert) {
  assert.plan(11)

  var start = Date.now()
  var times = 0

  var tick = raf(function (dt) {
    assert.ok(dt >= 0, 'time has passed: ' + dt)
    if (++times === 10) {
      var elapsed = Date.now() - start
      assert.ok(elapsed >= 150 && elapsed <= 500, 'should only call 9 frames, worth wall time: ' + elapsed)
      assert.end()
    } else {
      for (var i = 0; i < 1e2; i++) tick()
    }
  })

  tick()
})
