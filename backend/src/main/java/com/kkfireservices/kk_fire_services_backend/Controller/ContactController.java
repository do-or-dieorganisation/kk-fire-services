package com.kkfireservices.kk_fire_services_backend.Controller;

import com.kkfireservices.kk_fire_services_backend.entity.Contact;
import com.kkfireservices.kk_fire_services_backend.service.ContactService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<Contact> submitContact(@RequestBody Contact contact) {

        Contact savedContact = contactService.saveContact(contact);

        return ResponseEntity.ok(savedContact);
    }
}