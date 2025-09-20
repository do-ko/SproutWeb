package com.dom.sprout.rest;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

import static java.nio.file.Paths.get;

@RestController
@RequestMapping("/api/images")
@Tag(name = "Images")
public class ImageController {

    @Operation(summary = "Get image",
            description = "Returns and image according to given filename.")
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/download/{fileName}")
    public ResponseEntity<?> getImage(@PathVariable String fileName) throws Exception {
        String pathToImg = "sprout\\src\\main\\resources\\static\\" + fileName;
        byte[] image = Files.readAllBytes(new File(pathToImg).toPath());
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/jpeg"))
                .body(image);
    }

    @Operation(summary = "Upload image",
            description = "Uploads a new image.")
    @PostMapping("/upload/{fileName}")
    public String uploadImage(@RequestParam("file") MultipartFile file, @PathVariable String fileName) throws Exception {
        String[] fileData = file.getOriginalFilename().split("\\.");
        String pathToImg = "sprout\\src\\main\\resources\\static\\" + fileName + "." + fileData[fileData.length - 1];
        Files.copy(file.getInputStream(), get(pathToImg), StandardCopyOption.REPLACE_EXISTING);
        return "success";
    }
}
