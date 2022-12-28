import React, { useState, useReducer, useRef, useEffect } from 'react'
import './Demo.css'

import Local from './Local'


export default function Demo4() {
    const [namesubmit, setNamesubmit] = useState('add')
    const [inputvalue, setInputvalue] = useState()
    let data = [
        {
            id: 0,
            title: 'complete billing deteal 0',
            check: true,
            line: false,

        },
        {
            id: 1,
            title: 'complete billing deteal1',
            check: true,
            line: false,
        },
        {
            id: 2,
            title: 'complete billing deteal 3',
            check: true,
            line: false,

        },
        {
            id: 3,
            title: 'complete billing deteal 4',
            check: true,
            line: false,

        }
    ]

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                let aa = state.find(element => element.title == inputvalue);
                if (typeof aa != 'undefined') {
                    alert('nội dung vừa nhập đã tôn tại')
                    return state

                }
                else {
                    const cloneState = [...state];
                    //  console.log('ay', cloneState.length); console.log('ay', cloneState); console.log('id', cloneState[cloneState.length - 1].id)
                    cloneState.push({ id: state[state.length - 1].id + 1, title: inputvalue, check: true, line: false, })
                    setInputvalue('')
                    return cloneState
                }


            case 'check':
                return state.map(e => {
                    if (e.id == action.id)
                        return { ...e, check: !e.check };
                    else return e
                })

            case 'edit':
                return state.map(e => {
                    if (e.id == action.id) {
                        const ui = inputvalue
                        setInputvalue('')
                        setNamesubmit('add')
                        return { ...e, title: ui }

                    }
                    else {
                        return e
                    }
                })

            case 'delete':
                const tes = [...state]
                tes.splice(action.index, 1);
                return tes

            case 'line':

                return state.map(e => {
                    if (e.id == action.id) {
                        return { ...e, line: !e.line }
                    }
                    else
                        return e
                })


            default:
                return state;

        }
    }
    const test = useRef(JSON.parse(localStorage.getItem("foo")) || Local())

    const [todos, dispatch] = useReducer(reducer, test.current);

    /// hiện tại đang bị vướng useefec nên nút phải ấn 2 lần mới chạy
    useEffect(() => {

        localStorage.setItem('foo', JSON.stringify(todos))
        test.current = JSON.parse(localStorage.getItem("foo"))

        // localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const refInput = useRef()


    // const add = (todo) => {
    //     dispatch({ type: "add", id: todo.id });
    // };

    const onchangeinput = (event) => {
        setInputvalue(event.target.value)
    }

    const onclicksubmit = () => {
        if (namesubmit == 'add') {
            dispatch({ type: "add" })
        }
        else
            if (namesubmit == 'edit') {
                dispatch({ type: 'edit', id: refInput.current })
            }
    }

    const onclickcheckitem = (item) => {
        dispatch({ type: 'check', id: item.id })

    }

    const [hiden, setHiden] = useState()
    const cl = (item) => {
        // console.log("item:", item)
        setInputvalue(item.title)
        setNamesubmit('edit')
        refInput.current = item.id
        setHiden(pre => item.id)
        // setHiden(pre => {
        //     item.id
        // })
        // console.log(refInput.current)
    }

    const deletel = (item, index) => {
        refInput.current = index
        dispatch({ type: 'delete', index: refInput.current })
        // console.log('ay' + refInput.current)
    }

    // const ay = ;

    const onlickline = (item, index) => {
        refInput.current = item.id
        dispatch({ type: 'line', id: refInput.current })
    }

    return (
        <div >
            {/* {console.log(test.current)} */}
            {/* {alert(Local)} */}
            {/* <div style={{ textDecoration: 'line-through' }}>
                ay
            </div> */}
            {/* {console.log("todo:", todos)} */}

            <div className='on'>
                todo app
            </div>

            < div style={{ margin: 'auto' }} className='ay' >
                <div className='divinput' >

                    <input name='text' className='textinput' value={inputvalue} onChange={onchangeinput} placeholder='Enter title' />
                    {/* <input type='hidden' value={hiden} /> */}
                    <input className='button' type='submit' value={namesubmit} onClick={onclicksubmit} />

                </div>


                {/* {console.log(localStorage.foo)} */}
                {
                    todos.map((e, i) =>
                        <div key={i} className='item' style={{ textDecoration: e.line ? 'line-through' : '' }} onClick={() => onlickline(e, i)}>
                            <div style={{ fontSize: '14px' }}>
                                <iconify-icon icon="material-symbols:check-circle" style={{ color: "purple", position: "relative", top: "2px", marginRight: '4px' }}></iconify-icon>
                                {e.title}
                            </div>

                            <div>
                                <span onClick={() => cl(e)}>
                                    <button className='hidebutton' >
                                        <iconify-icon icon="majesticons:edit-pen-2" style={{ color: "gray", }}></iconify-icon>
                                    </button>
                                </span>
                                <span onClick={() => deletel(e, i)}>
                                    <button className='hidebutton'>
                                        <iconify-icon icon="ic:baseline-delete" style={{ color: "gray" }}></iconify-icon>
                                    </button>
                                </span>
                            </div>
                        </div>
                    )
                }
                {/* {console.log(todos)} */}

                {/* {inputvalue} */}
            </div >
        </div >
    )
}
