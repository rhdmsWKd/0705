// http://localhost:5500/contacts?pageno=? 가져올꺼임
function getPageno() {
  // get 방식의 querystring을 읽을수 있는 객체 생성
    const param = new URLSearchParams(location.search).get('pageno');
    const pageno = parseInt(param);
  if(isNaN(pageno))
      return 1;
    else if(pageno<1)
      return 1;
    else 
      return pageno;
  }
  
  // pageno가 없거나 숫자로 바꿀수 없는 값인 경우 parseInt의 결과는 NaN
  // : Not a Number
  // NaN를 비교하면 무조건 false(JS에서 NaN는 비교되는 값이 아니다)
  // NaN와 비교할 때는 isNaN() 함수를 사용해야 한다
  // NaN에도 null 포함됨
  
  // 기본 매개변수
  async function fetch(pageno, pagesize=10) {
    const api =`http://sample.bmaster.kro.kr/contacts`;
    const url = `${api}?pageno=${pageno}&pagesize=${pagesize}`;
    //$.ajax()는 병렬 처리 (비동기 처리)되는 코드 -> 언제 끝날 지 모른다
    //비동기코드를 리턴받는 result는  "미래에 값이 들어올것이다"란 값을 가진다
    //(promise)
    //
  try {
    return await $.ajax(url);
  }catch(err) {
    console.log(err);
    return nul
    }
  }

  
