import { React, useReducer, useContext } from 'react'
import { UserContext } from '../App';

const state = [
    {
        id: 1,
        title: 'gia tri 1',
        value: 1,
    },
    {
        id: 2,
        title: 'gia tri 2',
        value: 2,
    },
    {
        id: 3,
        title: 'gia tri 3',
        value: 3,
    }
]

const ham = (state, action) => {
    switch (action.type) {
        case 'ok':
            return state.map(e => {
                if (e.id == action.id) {
                    return { ...e, value: 0 };
                } else return e
            })
        case 'test':
            return state.map(e => {
                if (e.id === action.id) {
                    return { ...e, value: 1 }
                } else return e
            })
        default:
            return state;

    }
}



export default function Demo2() {

    const [todos, dispatch] = useReducer(ham, state);  /// lưu í  todos ở đây là giá trị của hàm khi đã return

    const onclickcheck = (item) => {
        dispatch({ type: 'ok', id: item.id })
    }

    const ontest = (item) => {
        dispatch({ type: 'test', id: item.id })
    }
    // const UserContext = createContext();
    const user = useContext(UserContext);
    return (
        <div>

            {todos.map((e, i) =>
                <div key={i}>
                    {e.value}
                    <button onClick={() => onclickcheck(e)}>
                        check
                    </button>

                    <button onClick={() => ontest(e)}>
                        test
                    </button>
                    <br />
                    id: {e.id}
                </div>
            )}
            {user}
            {console.log(user)}
        </div>
    )
}
