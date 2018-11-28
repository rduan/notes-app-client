export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-uploads-ph"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://zzmtnlmwjk.execute-api.ap-southeast-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_SCLaM3fGQ",
    APP_CLIENT_ID: "6hu418k8iui5vk02v547aqed0b",
    IDENTITY_POOL_ID: "ap-southeast-1:ca49c4f6-5a63-4511-a1b6-c85f2a83e2c0"
  }
};
