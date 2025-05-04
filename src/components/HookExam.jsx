import { useState } from "react";
import useInput from "./../hooks/useInput";

/**
 * 3가지 hook 관련된 팁
 * 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
 * 2. 조건/반복문 내부로 호출될 수 없다.
 * 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.
 */

// const state = useState(); 함수 컴포넌트 내부만!

// Custom Hook으로 선언(접두사는 use가 필수)


const HookExam = () => {
    // 조건/반복문 내부로 호출될 수 없다.
    // if (true) {
    //     const state = useState();
    // }

    // for(;;) {
    //     const state = useState();
    // }

    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    )
}

export default HookExam;