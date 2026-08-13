import '@testing-library/jest-dom/vitest';

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = ResizeObserverMock as typeof ResizeObserver;
}

if (!HTMLElement.prototype.scrollIntoView) {
  HTMLElement.prototype.scrollIntoView = () => {};
}

// jsdom does not implement pointer capture, but Radix primitives (e.g. Select)
// call hasPointerCapture/releasePointerCapture inside their pointerdown
// handlers; without these stubs the mouse-pointerdown opening path throws
// before the component can open.
if (typeof HTMLElement.prototype.hasPointerCapture !== 'function') {
  HTMLElement.prototype.hasPointerCapture = () => false;
  HTMLElement.prototype.releasePointerCapture = () => {};
  HTMLElement.prototype.setPointerCapture = () => {};
}
