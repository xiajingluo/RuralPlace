import { Hello } from "../src/Hello";

let h: Hello

beforeEach(() => {
  h = new Hello()
})

test('Say Hello', () => {
  expect(h.sayHello()).toBe('Hello World')
})