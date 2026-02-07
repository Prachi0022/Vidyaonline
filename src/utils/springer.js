/**
 * Springer - Spring easing library converted to TypeScript
 * Exact port of the original JavaScript algorithm
 */

/**
 * Spring simulation step function (exact port from original JS)
 */
function simulateSpringStep(
  position,
  target,
  velocity,
  stiffness,
  damping,
  dt,
  resultArray,
) {
  const springForce = -stiffness * (position - target);
  const dampingForce = -damping * velocity;
  const totalForce = springForce + dampingForce;
  const newVelocity = velocity + totalForce * dt;
  const newPosition = position + newVelocity * dt;

  return Math.abs(newVelocity) < 1 && Math.abs(newPosition - target) < 1
    ? ((resultArray[0] = target), (resultArray[1] = 0), resultArray)
    : ((resultArray[0] = newPosition), (resultArray[1] = newVelocity), resultArray);
}

/**
 * Main spring function (exact port from original JS)
 */
function createSpring(tension = 0.5, friction = 0.5) {
  const stiffness = Math.min(Math.max(350 * tension, 20), 350);
  const damping = Math.min(Math.max(40 - 40 * friction, 1), 40);
  const target = 10000;
  const dt = 16 / target;
  const resultArray = [0, 0];

  const points = [];
  let position = 0;
  let velocity = 0;

  // Exact simulation loop from original JS
  while (position !== target || velocity !== 0) {
    const result = simulateSpringStep(position, target, velocity, stiffness, damping, dt, resultArray);
    position = result[0];
    velocity = result[1];
    points.push(position / target);
  }

  // Return the exact same function as original JS
  return function (t) {
    return points[Math.ceil(t * (points.length - 1))];
  };
}

/**
 * Springer object (exact API from original JS)
 */
const Springer = {
  /**
   * Default function that returns a spring easing function
   * @param tension - Spring tension (0-1, default: 0.5)
   * @param friction - Spring friction (0-1, default: 0.5)
   * @returns Spring easing function that can be used directly with GSAP
   */
  default: function (tension = 0.5, friction = 0.5) {
    return createSpring(tension, friction);
  },
};

// Export for use in components
export default Springer;

// Also export the raw spring function for advanced usage
export { createSpring };

// Auto-attach to window if in browser environment (for backward compatibility)
if (typeof window !== 'undefined') {
  window.Springer = Springer;
}
