/** A example of a "complex" "Hello World". */
export class ComplexHelloWorld {

  /**
   * @param message Defines a message to show on console.
   * @returns A console log with message.
   */
  public sendMessage(message: string): void {
    return console.log(message);
  }
}

const app = new ComplexHelloWorld();

app.sendMessage('Hello World!');
