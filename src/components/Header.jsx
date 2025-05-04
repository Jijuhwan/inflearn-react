// 컴포넌트는 항상 첫글자를 대문자로 지정해야 한다.

// 함수 컴포넌트
function Header() {
    return (
      <header>
        <h1>header</h1>
      </header>
    );
  }
  
  // 화살표 컴포넌트 (함수와 동일)
  const Header2 = () => {
    return (
      <header>
        <h1>header</h1>
      </header>
    );
  }

export default Header;