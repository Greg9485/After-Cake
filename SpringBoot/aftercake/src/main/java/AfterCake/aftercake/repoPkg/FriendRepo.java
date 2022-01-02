package AfterCake.aftercake.repoPkg;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import AfterCake.aftercake.modelPkg.Friend;

public interface FriendRepo extends JpaRepository<Friend, Long>{
	void deleteFriendById(Long id);

	Optional<Friend> findFriendById(Long id);
}
