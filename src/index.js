const defaultForm = {
  "version": "2.0",
  "resultCode": "OK",
  "output": {},
  "directives": []
};

exports.health = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "OK"
  });
}

exports.myFunction = (event, context, callback) => {
  try {
    var requestBody = JSON.parse(event.body);
  } catch (e) {
    var requestBody = event;
  }

  var action = requestBody.action;
  var actionName = action.actionName;
  var parameters = action.parameters;


  // console.log("Answer : " + answer);
  console.log(actionName);
  switch (actionName) {
    case "startAction": {
      let data = callbackResponseBasic("randomComment1", getMessage());
      data = callbackResponseBasic("randomComment2", getMessage(), data);
      data = callbackResponseBasic("randomComment3", getMessage(), data);
      data = callbackResponseBasic("randomComment4", getMessage(), data);
      data = callbackResponseBasic("randomComment5", getMessage(), data);
      data = callbackResponseBasic("randomComment6", getMessage(), data);
      data = callbackResponseBasic("randomComment7", getMessage(), data);
      data = callbackResponseBasic("randomComment8", getMessage(), data);
      data = callbackResponseBasic("randomComment9", getMessage(), data);
      data = callbackResponseBasic("randomComment10", getMessage(), data);
      send(data, callback);
      break;
      // callbackResponseBasic("randomComment", answer, callback);
    }
    case "answerAction": {
      // callbackResponseBasic("randomComment", answer, callback);
      let data = callbackResponseBasic("randomComment1", getMessage());
      data = callbackResponseBasic("randomComment2", getMessage(), data);
      data = callbackResponseBasic("randomComment3", getMessage(), data);
      data = callbackResponseBasic("randomComment4", getMessage(), data);
      data = callbackResponseBasic("randomComment5", getMessage(), data);
      data = callbackResponseBasic("randomComment6", getMessage(), data);
      data = callbackResponseBasic("randomComment7", getMessage(), data);
      data = callbackResponseBasic("randomComment8", getMessage(), data);
      data = callbackResponseBasic("randomComment9", getMessage(), data);
      data = callbackResponseBasic("randomComment10", getMessage(), data);
      send(data, callback);
      break;
    }
  }
  // if (actionName == "start") {
  //   callbackResponseBasic(answer, callback);
  // }
};

function getMessage() {
  const text = ['언젠가는', '쉴 때가 됐다', '가만히 있어', '굶어', '그럼', '다시 한 번 물어봐', '안돼', '안        돼', '아아아아안돼애애', '아안돼애', '어림도 없지', '하지마', '돌아가', '그게 될 거라고 생각해?', '포기해', '아마 그럴걸', '생각 좀 해보고 말해', '이미 넌 알고 있어', '간단하지', '진심이니?', '안될 것 같은데', '한국 말로 해줘', '맞아', '바로 그거야', '넌 할 수 있어', '영원히 안돼', '시리한테 물어봐', '빅스비한테 물어봐', '카카오 미니한테 물어봐', '힘을 아껴라', '10을 세고 다시 질문을 해라', '신중하게 접근해라', '꼭 해야한다', '아니오', '아니오', '아니오', '아니요', '그래', '하지마', '하지 말라면 좀 하지마', '그거 빼고', '대박', '대가를 치뤄야 할 것이다', '그랭', '아니용', '그게 될까?', '예', '넌 할 수 있어', '예스', '예스 유 캔', '무조건이지', '불가능이란 없어', '당연히 가능하지', '웅', '응', '응 당연하지', '물론', '물론이지', '적극적인 자세로 임하라', '절대로', '정말 그게 질문이야?', '그래용'];
  // const answer = text.sort(function(){return 0.5-Math.random()})[0];
  const answer = text[Math.floor(Math.random() * (text.length + 1))];
  return answer;
}

function send(data, callback) {
  console.log(data);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data)
  });
}

function callbackResponseBasic(parName, element, data = defaultForm) {
  // callback(null, {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     "version": "2.0",
  //     "resultCode": "OK",
  //     "output": {
  //       [parName]: message,
  //     },
  //     "directives": []
  //   })
  // });
  let temp = data.output;
  return {
    ...data,
    "output": {
      ...temp,
      [parName]: element
    }
  };
}