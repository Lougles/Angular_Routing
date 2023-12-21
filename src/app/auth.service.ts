export class AuthService {
  loggedIn: boolean = false;

  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise(
      (res, rej): void => {
        setTimeout((): void => {
          res(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
