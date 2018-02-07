let HOST;

if (process.env.NODE_ENV === "production") {
  HOST = "https://cryptic-sierra-54081.herokuapp.com";
} else {
  HOST = "http://localhost:8080";
}

export function checkServiceNumber(number) {
  const capSvc = number.toUpperCase();
  return fetch(`${HOST}/customers/${capSvc}`).then(res => {
    if (res.ok) {
      return res.json();
    } else if (res.status === 404) {
      return false;
    }
    throw new Error("There was a problem with your request");
  });
}

export function sendMessage(message, number, conversationID) {
  const headers = new Headers({
    "X-Service-Number": number.toString()
  });
  return fetch(`${HOST}/conversations/${conversationID}`, {
    method: "POST",
    body: message,
    headers
  }).then(res => {
    if (res.ok) {
      return res.text();
    } else if (res.status === 404) {
      throw new Error("Conversation not found");
    } else if (res.status === 403) {
      throw new Error("Not authorized to view this conversation");
    }
    throw new Error("There was a problem with your request");
  });
}

export function startConversation(number) {
  const headers = new Headers({
    "X-Service-Number": number.toString()
  });
  return fetch(`${HOST}/conversations`, {
    method: "GET",
    mode: "cors",
    headers
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else if (res.status === 302) {
      throw new Error("Not authorized to create conversations");
    }
    throw new Error("There was a problem with your request");
  });
}
