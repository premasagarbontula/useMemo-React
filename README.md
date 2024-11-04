The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

Syntax:
const memoizedValue = useMemo(functionThatReturnsValue, arrayDependencies)

Output: Now in the above example, we have used the user memo hook, here the function that returns the value i.e square is passed inside the useMemo and inside the array dependencies, 
we have used the number as the square will run only when the number changes. If we increase the counter and the number remains the same in the input field the square doesn’t run again

![image](https://github.com/user-attachments/assets/4ad91891-486d-431b-9946-e8bd990ae744)
