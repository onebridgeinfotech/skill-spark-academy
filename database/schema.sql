-- Ismart Skills CRM — run once in Hostinger phpMyAdmin or MySQL console

CREATE TABLE IF NOT EXISTS leads (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  source VARCHAR(50) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NULL,
  enquiry_type VARCHAR(100) NULL,
  programme VARCHAR(255) NULL,
  message TEXT NULL,
  course_slug VARCHAR(255) NULL,
  page_url VARCHAR(500) NULL,
  status ENUM('new', 'contacted', 'qualified', 'closed', 'spam') NOT NULL DEFAULT 'new',
  notes TEXT NULL,
  ip_address VARCHAR(45) NULL,
  user_agent VARCHAR(500) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_leads_status (status),
  INDEX idx_leads_email (email),
  INDEX idx_leads_source (source),
  INDEX idx_leads_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
