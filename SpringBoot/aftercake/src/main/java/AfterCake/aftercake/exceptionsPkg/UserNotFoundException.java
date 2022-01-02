package AfterCake.aftercake.exceptionsPkg;

public class UserNotFoundException extends RuntimeException {
	public UserNotFoundException(String message) {
		super(message);
	}
}
