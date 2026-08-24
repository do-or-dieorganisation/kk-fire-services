package com.kkfireservices.kk_fire_services_backend.repository;

import com.kkfireservices.kk_fire_services_backend.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}