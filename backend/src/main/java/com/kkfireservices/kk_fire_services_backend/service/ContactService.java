package com.kkfireservices.kk_fire_services_backend.service;

import com.kkfireservices.kk_fire_services_backend.entity.Contact;
import com.kkfireservices.kk_fire_services_backend.repository.ContactRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }
}