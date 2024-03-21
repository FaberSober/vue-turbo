# CSS

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

# SASS

## 全局样式

命名方式：xx.scss

```
.demo-text-global {
  color: gold;
}
```

使用

```js
import '@/styles/demo.scss';

<div class="demo-text-global">SCSS样式测试（全局）</div>;
```

## 局部样式

命名方式：xx.module.scss

```
.demo-text2 {
  color: blue;
}
```

使用

```js
import styles from './demo.module.scss'

<div :class="styles.demoText2">SCSS样式测试（局部）</div>
```

# 多个classname

https://github.com/lukeed/clsx

```typescript jsx
import clsx from 'clsx';
// or
import { clsx } from 'clsx';

// Strings (variadic)
clsx('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
clsx({ foo: true, bar: false, baz: isTrue() });
//=> 'foo baz'

// Objects (variadic)
clsx({ foo: true }, { bar: false }, null, { '--foobar': 'hello' });
//=> 'foo --foobar'

// Arrays
clsx(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
clsx('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya');
//=> 'foo bar hello world cya'
```
