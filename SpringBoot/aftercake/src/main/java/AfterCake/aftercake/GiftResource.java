package AfterCake.aftercake;

import java.util.List;

import javax.transaction.Transactional;

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

import AfterCake.aftercake.modelPkg.Gift;
import AfterCake.aftercake.servicePkg.GiftService;

@RestController
@RequestMapping("/gift")
public class GiftResource {
	private final GiftService giftService;

	public GiftResource(GiftService giftService) {
		this.giftService = giftService;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Gift>> getAllGifts(){
		List<Gift> gifts = giftService.findAllGifts();
		return new ResponseEntity<>(gifts, HttpStatus.OK);
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Gift> getGiftById(@PathVariable("id") Long id){
		Gift gift = giftService.findGiftById(id);
		return new ResponseEntity<>(gift, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Gift> addGift(@RequestBody Gift gift){
		Gift newGift = giftService.addGift(gift);
		return new ResponseEntity<>(newGift, HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Gift> updateGift(@RequestBody Gift gift){
		Gift updateGift = giftService.updateGift(gift);
		return new ResponseEntity<>(updateGift, HttpStatus.OK);
	}
	
	@Transactional
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Gift> deleteGift(@PathVariable("id") Long id){
		giftService.deleteGift(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}