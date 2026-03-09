

# WordPress

**Semantic Personal Publishing Platform**

Welcome. WordPress is a very special project to many developers and contributors. Thousands of hours have gone into WordPress, and the community is dedicated to making it better every day.

— Matt Mullenweg

---

## Installation: Famous 5‑minute install

1. Unzip the package in an empty directory and upload everything.
2. Open `wp-admin/install.php` in your browser. It will guide you through creating a `wp-config.php` file with your database connection details.
   - If automatic configuration does not work, open `wp-config-sample.php` in a text editor and fill in the database details manually.
   - Save the file as `wp-config.php` and upload it.
   - Open `wp-admin/install.php` again in your browser.
3. Once the configuration file is set up, the installer will create the necessary database tables.
4. If you did not enter a password, note the generated password. If you did not provide a username, it will be `admin`.
5. The installer will then redirect you to the login page (`wp-login.php`). Sign in using the credentials you created during installation.

---

## Updating

### Using the Automatic Updater

1. Open `wp-admin/update-core.php` in your browser.
2. Follow the instructions on the screen.

### Updating Manually

1. Before updating, make backup copies of any modified files.
2. Delete the old WordPress files, except those you modified.
3. Upload the new files.
4. Open `/wp-admin/upgrade.php` in your browser.

---

## Migrating from Other Systems

WordPress can import content from many other systems. Install WordPress first, then use the import tools available in `wp-admin/import.php`.

---

## System Requirements

- **PHP:** 7.2.24 or greater
- **MySQL:** 5.5.5 or greater

### Recommended

- **PHP:** 8.3 or greater
- **MySQL:** 8.0 or greater
- **MariaDB:** 10.6 or greater
- Apache module `mod_rewrite`
- HTTPS support

---

## Online Resources

If you need help, check the following resources:

- WordPress Documentation (HelpHub)
- WordPress News Blog
- WordPress Planet (community posts)
- WordPress Support Forums
- WordPress IRC chat (#wordpress on libera.chat)

---

## Final Notes

- If you have suggestions, ideas, or found a bug, visit the WordPress support forums.
- WordPress provides a powerful Plugin API for extending functionality. Developers should use plugins rather than modifying core files.

---

## Share the Love

WordPress does not rely on big marketing campaigns. If you enjoy using WordPress, consider:

- recommending it to others
- helping someone set up a website
- contributing to the community

---

## License

WordPress is free software released under the **GNU General Public License (GPL) version 2 or later**.

See `license.txt` for the full license text.