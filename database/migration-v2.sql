-- Ismart Skills CRM v2 — run ONCE in phpMyAdmin on existing database
-- Skip any line that errors with "Duplicate column name"

UPDATE leads SET status = 'enrolled' WHERE status = 'closed';

ALTER TABLE leads ADD COLUMN company VARCHAR(255) NULL AFTER phone;
ALTER TABLE leads ADD COLUMN job_title VARCHAR(255) NULL AFTER company;
ALTER TABLE leads ADD COLUMN course_name VARCHAR(255) NULL AFTER course_slug;
ALTER TABLE leads ADD COLUMN course_category VARCHAR(100) NULL AFTER course_name;
ALTER TABLE leads ADD COLUMN assigned_to VARCHAR(100) NULL AFTER notes;
ALTER TABLE leads ADD COLUMN follow_up_date DATE NULL AFTER assigned_to;
ALTER TABLE leads ADD COLUMN preferred_contact ENUM('email','phone','whatsapp') NULL AFTER follow_up_date;
ALTER TABLE leads ADD COLUMN funding_type ENUM('self_funded','employer','government','instalment','unknown') NOT NULL DEFAULT 'unknown' AFTER preferred_contact;
ALTER TABLE leads ADD COLUMN deal_value DECIMAL(10,2) NOT NULL DEFAULT 0 AFTER funding_type;
ALTER TABLE leads ADD COLUMN payment_status ENUM('none','pending','deposit','partial','paid','refunded') NOT NULL DEFAULT 'none' AFTER deal_value;
ALTER TABLE leads ADD COLUMN enrollment_date DATE NULL AFTER payment_status;
ALTER TABLE leads ADD COLUMN lost_reason VARCHAR(255) NULL AFTER enrollment_date;
ALTER TABLE leads ADD COLUMN priority ENUM('low','medium','high') NOT NULL DEFAULT 'medium' AFTER lost_reason;

ALTER TABLE leads
  MODIFY COLUMN status ENUM(
    'new','contacted','demo_scheduled','qualified','proposal_sent','enrolled','closed_lost','spam'
  ) NOT NULL DEFAULT 'new';

ALTER TABLE leads ADD INDEX idx_leads_course (course_slug);
ALTER TABLE leads ADD INDEX idx_leads_follow_up (follow_up_date);
ALTER TABLE leads ADD INDEX idx_leads_assigned (assigned_to);
