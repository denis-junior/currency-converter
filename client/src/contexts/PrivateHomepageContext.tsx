import {
    ChangeEvent,
    createContext,
    ReactNode,
    useState,
  } from "react";
import { CurrentConverterValue } from "../types/CurrencyConverterItem";
  
  type PrivateHomepageContextType = {
    historic: Array<CurrentConverterValue>;
    setHistoric: Function;
  };
  
  type PrivateHomepageContextProps = {
    children: ReactNode;
  };
  
  const initialValues = {
    historic: [],
    setHistoric: () => {},
  };
  
  export const PrivateHomepageContext = createContext<PrivateHomepageContextType>(initialValues);
  
  export const PrivateHomepageContextProvider = ({ children }: PrivateHomepageContextProps) => {
    const [historic, setHistoric] = useState<CurrentConverterValue[]>(initialValues.historic);
  
    // const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    //   if (event.target.name === "task") {
    //     console.log(event.target.name + "\n value:" + event.target.value)
    //     setTask(event.target.value);
    //   } else {
    //     console.log(event.target.name + "\n value:" + event.target.value)
    //     setDeadline(Number(event.target.value));
    //   }
    // };
  
    // const addTask = (): void => {
    //   const newTask = { taskName: task, deadline };
    //   console.log(newTask)
    //   setTodoList([...todoList, newTask]);
    //   setTask("");
    //   setDeadline(0);
    // };
  
    // const completeTask = (taskNameToDelete: string): void => {
    //   setTodoList(
    //     todoList.filter((task) => {
    //       return task.taskName !== taskNameToDelete;
    //     })
    //   );
    // };
  
    return (
      <PrivateHomepageContext.Provider
        value={{ historic, setHistoric}} >
        {children}
      </PrivateHomepageContext.Provider>
    );
  };