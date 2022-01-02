package AfterCake.aftercake.servicePkg;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AfterCake.aftercake.exceptionsPkg.UserNotFoundException;
import AfterCake.aftercake.modelPkg.Gift;
import AfterCake.aftercake.repoPkg.GiftRepo;

@Service
public class GiftService {
	private final GiftRepo giftRepo;

	@Autowired
	public GiftService(GiftRepo giftRepo) {
		this.giftRepo = giftRepo;
	}

	public Gift addGift(Gift gift) {
		gift.setGiftCode(UUID.randomUUID().toString());
		return giftRepo.save(gift);
	}

	
	public List<Gift> findAllGifts(){
		return giftRepo.findAll();
	}
	
	public Gift updateGift(Gift gift) {
		return giftRepo.save(gift);
	}
	
	
	public Gift findGiftById(Long id) {
		return giftRepo.findGiftById(id)
				.orElseThrow(() -> new UserNotFoundException("Gift by id: " + id + " was not found."));
	}
	
	public void deleteGift(Long id) {
		giftRepo.deleteGiftById(id);
	}	
}