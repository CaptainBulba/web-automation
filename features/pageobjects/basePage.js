export class BasePage {
  getUsernameInputField() {
    return $("#sso_username");
  }

  getPasswordInputField() {
    return $("#ssopassword");
  }

  getSignInButton() {
    return $("#signin_button");
  }

  getCredentialsErrorMsg() {
    return $('//span[@id="errormsg"]/div');
  }

  getCreateAccountButton() {
    return $('.cb41create-btn');
  }
}
