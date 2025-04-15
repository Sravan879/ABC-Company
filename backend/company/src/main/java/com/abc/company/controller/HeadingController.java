package com.abc.company.controller;

import com.abc.company.model.Heading;
import com.abc.company.service.HeadingService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/api/heading")
public class HeadingController {

    private final HeadingService headingService;

    public HeadingController(HeadingService headingService) {
        this.headingService = headingService;
    }

    @GetMapping("/get")
    public Heading getHeading() {
        return headingService.getHeading();
    }

    @PostMapping("/update")
    public Heading updateHeading(@RequestBody Heading heading) {
        return headingService.updateHeading(heading.getText());
    }
}
