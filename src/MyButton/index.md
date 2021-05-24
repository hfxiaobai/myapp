
## MyButton

```tsx
import React from 'react';
import { MyButton } from 'myapp';

export default () => {
  const fn = (id) => {
      alert(id)
      console.log(111) 
  }
  return (
    <MyButton id={123} handleClick={fn} />
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
