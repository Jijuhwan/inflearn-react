/*
 * 간단한 회원가입 폼
 * 1. 이름
 * 2. 생년월일
 * 3. 국적
 * 4. 자기소개
 */

import { useState, useRef } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    };

    console.log(input);

    const onChangeName = (e) => {
        setInput({
            ...input,
            name: e.target.value
        })
    };

    const onChangeBirth = (e) => {
        setInput({
            ...input,
            birth: e.target.value
        })
    };

    const onChangeCountry = (e) => {
        setInput({
            ...input,
            country: e.target.value
        })
    };

    const onChangeBio = (e) => {
        setInput({
            ...input,
            bio: e.target.value
        })
    };

    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // }

    // const onChangeBirth = (e) => {
    //     setBirth(e.target.value);
    // }

    // const onChangeCountry = (e) => {
    //     setCountry(e.target.value);
    // }

    // const onChangeBio = (e) => {
    //     setBio(e.target.value);
    // }

    return (
        <div>
            <div>

            </div>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date" />
            </div>
            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}>
                    <option></option>
                    <option value="KR">한국</option>
                    <option value="US">미국</option>
                    <option value="UK">영국</option>
                </select>
            </div>
            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange} />
            </div>
            <button onClick={onSubmit} />
        </div>
    )
};

export default Register;