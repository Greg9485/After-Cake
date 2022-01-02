package AfterCake.aftercake.repoPkg;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import AfterCake.aftercake.modelPkg.Gift;

public interface GiftRepo extends JpaRepository<Gift, Long>{
	void deleteGiftById(Long id);

	Optional<Gift> findGiftById(Long id);
}
