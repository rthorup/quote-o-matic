import {createContext, useState} from 'React';


 const [currentSelection, setSelection] = useState("");

 const SelectionContext = createContext(null);

export default SelectionContext;
