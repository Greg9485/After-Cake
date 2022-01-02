package AfterCake.aftercake.repoPkg;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import AfterCake.aftercake.modelPkg.User;

public interface UserRepo extends JpaRepository<User, Long>{
	void deleteUserById(Long id);

	Optional<User> findUserById(Long id);
}
