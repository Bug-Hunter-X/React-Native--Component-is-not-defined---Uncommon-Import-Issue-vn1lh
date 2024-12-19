This error occurs when you try to use a component that hasn't been imported correctly, or if the component's name has changed.  It's often linked to incorrect path resolution or typos in the import statement.

```javascript
// Incorrect import
import { MyComponent } from './myComponent'; //Incorrect path or typo

// Correct import
import MyComponent from './MyComponent';
```