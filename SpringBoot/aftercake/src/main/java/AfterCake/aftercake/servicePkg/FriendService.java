package AfterCake.aftercake.servicePkg;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AfterCake.aftercake.exceptionsPkg.UserNotFoundException;
import AfterCake.aftercake.modelPkg.Friend;
import AfterCake.aftercake.repoPkg.FriendRepo;


@Service
public class FriendService {
	private final FriendRepo friendRepo;

	@Autowired
	public FriendService(FriendRepo friendRepo) {
		this.friendRepo = friendRepo;
	}

	public Friend addFriend(Friend friend) {
		friend.setFriendCode(UUID.randomUUID().toString());
		return friendRepo.save(friend);
	}

	
	public List<Friend> findAllFriends(){
		return friendRepo.findAll();
	}
	
	public Friend updateFriend(Friend friend) {
		return friendRepo.save(friend);
	}
	
	
	public Friend findFriendById(Long id) {
		return friendRepo.findFriendById(id)
				.orElseThrow(() -> new UserNotFoundException("Friend by id: " + id + " was not found."));
	}
	
	public void deleteFriend(Long id) {
		friendRepo.deleteFriendById(id);
	}	
}