package com.abc.company.service;

import com.abc.company.model.Heading;
import com.abc.company.repository.HeadingRepository;
import org.springframework.stereotype.Service;

@Service
public class HeadingService {

    private final HeadingRepository headingRepository;

    public HeadingService(HeadingRepository headingRepository) {
        this.headingRepository = headingRepository;
    }

    public Heading getHeading() {
        return headingRepository.findById(1).orElse(new Heading(1, ""));
    }

    public Heading updateHeading(String newText) {
        Heading heading = new Heading(1, newText);
        return headingRepository.save(heading);
    }
}
