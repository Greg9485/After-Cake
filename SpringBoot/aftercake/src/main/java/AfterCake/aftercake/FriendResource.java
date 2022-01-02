package AfterCake.aftercake;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import AfterCake.aftercake.modelPkg.Friend;
import AfterCake.aftercake.servicePkg.FriendService;

@RestController
@RequestMapping("/friend")
public class FriendResource {
	private final FriendService friendService;

	//@Value("{aftercake/src/main/java/service/friendService}")
	
	
	public FriendResource(FriendService friendService) {
		this.friendService = friendService;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Friend>> getAllFriends(){
		List<Friend> friends = friendService.findAllFriends();
		return new ResponseEntity<>(friends, HttpStatus.OK);
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Friend> getFriendById(@PathVariable("id") Long id){
		Friend friend = friendService.findFriendById(id);
		return new ResponseEntity<>(friend, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Friend> addFriend(@RequestBody Friend friend){
		Friend newFriend = friendService.addFriend(friend);
		return new ResponseEntity<>(newFriend, HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Friend> updateFriend(@RequestBody Friend friend){
		Friend updateFriend = friendService.updateFriend(friend);
		return new ResponseEntity<>(updateFriend, HttpStatus.OK);
	}
	
	@Transactional
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Friend> deleteFriend(@PathVariable("id") Long id){
		friendService.deleteFriend(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}