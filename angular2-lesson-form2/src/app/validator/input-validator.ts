import { FormControl } from '@angular/forms';

export class InputValidator {
  // 함수에서 직접 사용하기 위해 static을 붙임.
  static startWithNumber(control: FormControl) {

    // 값이 숫자로 시작하면 true
    let valid = /^\d/.test(control.value);

    // isNaN: 넘버냐?
    if (valid && control.value !== '' && !isNaN(control.value.charAt(0))) {
      // 데이터가 원하는 작성규칙에 위반되면 true를 리턴합니다.
      // 즉 true가 위반이라는 뜻
      return { startWithNumber: true };
    }

    return null;
  }
}

// 데코레이터, 인터페이스 없음, 무한 자유
// 단, FormControl 객체를 파라미터로 받는다.
// 그리고, { 함수명, 불린값 } 형태의 객체를 리턴해야 한다.
