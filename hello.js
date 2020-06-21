openpgp.config.show_version = false;
openpgp.config.show_comment = true;
openpgp.config.commentstring = 'Encrypted with OpenPGP.js v4.8.0';

const pubkey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
8re2EjVDsj2iU4g91bxAnBhDxKgcGaB7wXZvQFw+UP7b6xHlWT7DmKmyIdpst294
McdXCdjBVIY6pnfDWOZhbu91+dnDZnGGOqS2ERcU2coT6JV670ulA7DJeLvzvXj1
omAX6uy7iBNO06VdOADbM8B7CMslBmXvrUq6mbX1RPc1VYfmvzXb36S5G/pu+uK9
ycwpv3BglDB4TrErpnowuokjv5rKoPpUjsZrPpNnijB7LuQywcrsJZVSX0Phklu0
MV5cC9Y9PhKmwmh6pjC3yGvZgQ3TyTB7F9SPM3mzYyV+FIg6ZtHEFXWrN+FgT1LF
vTUYkb3IObsttlJrAxzFi2E1VFLsa6Ugs0lK3w5Ck9zqwWW0fQqArnPMnKxEBgej
g6lre3iePBnB7XQSa/aW2/ftQF3oARI+xV5hdKlhzkK4r6DSv5kx/dMX3aWXytpg
3IFWIXYMBN62v27VNgHO5b+CrikvAWcJfIRyxW7dgSkPS67kb1SQVcInqSwclGve
XjhPdyx3Fiu2M0Hjm6GRlQkE+QA44Mr5Gy59F4/PLYulmb+dwQbvPFkleMBemIFK
vSogpgbRFfy+XNY0ee5v/8sLZSi77okCQQQTAQIAKwIbAwUJA8JnAAYLCQgHAwIG
FQgCCQoLBBYCAwECHgECF4AFAlP0/iICGQEACgkQZiMu3Yhz6Zj1aw/+LuebZrCz
yfigp30emNlcciIMVEysqQlJAdwP9yXLjg1rj5nJKx5Q4I4QxztM3qYMSKLtJ5fv
YoJjYJfIxbCjna9GUPWaMkLQhTTR+3gVYBtQb/Wu24in6bSFMJ9fOaGeYBIAegqN
DgIvbPNbPuQD3u64DFvFWYkWmbSEgEiJYk5wUsS4MznZrd9sIxDGR1YrX0+UR1Y6
hMfhzMcMhESYmTxVjKGyfqDdSBe++Tj0eG7m5WrnBBr+0N3bWJGwhZiz2aKILuf5
KACdfrRrhxV+nsMMGqPwKeBOmYmysj3aXV1kgcPokBVqFThjCW0EYKK6V9GLMU0e
e5q5LXvymCBfRA4s1S/DYPhf9iobbmWPwOfzPB0nClpqCpp9NsWlVrEq0zGGOJRA
JhTZD0aVMRJ9qUZv12wkWZ9VGQ3p8hOfqRUKzwMEmuo0GWooAxsQRs3nH/Ymk7/s
gpihjSmWrRfLWwm/AK2dVtDHh4VFlKTTPkI7ImrPGsSs075w4lc2YVvLBrPkwtiX
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
=2dlp
-----END PGP PUBLIC KEY BLOCK-----
`;

(async ($) => {
  'use strict';

  let encryption = $('#crypto');
  let status = $('#status');
  encryption.checked = true;
  encryption.disabled = false;
  status.textContent = '(Supported)';
  status.style.color = 'green';

  $('#hello input[type="submit"]').addEventListener('click', async (event) => {
    event.preventDefault();

    let form = $('#hello');
    let inputName = $('#hello [name="name"]');
    let inputEmail = $('#hello [name="email"]');
    let inputMessage = $('#hello [name="message"]');
    inputName.value = inputName.value.trim() || '[unknown]';
    inputEmail.value = inputEmail.value.trim() || '[unknown]';
    inputMessage.value = inputMessage.value.trim() || '[empty]';

    if (encryption.checked) {
      try {
        let message = [
          `Name: ${inputName.value}`,
          `Email: ${inputEmail.value}`,
          `Message:\n\n${inputMessage.value}`,
        ].join('\n\n') + '\n';
        let options = {
          message: openpgp.message.fromText(message),
          publicKeys: (await openpgp.key.readArmored(pubkey)).keys,
        };
        let encrypted = (await openpgp.encrypt(options)).data;
        inputName.value = '[unknown]';
        inputEmail.value = '[unknown]';
        inputMessage.value = encrypted;
        encryption.checked = false;
        status.title = '';
        location.assign('#sending');
        form.submit();
      } catch (err) {
        encryption.checked = false;
        encryption.disabled = true;
        status.textContent = '(Unsupported)';
        status.style.color = 'red';
        status.title = err;
        console.error(err);
      }
    } else {
      location.assign('#sending');
      form.submit();
    }
  }, true);
})(document.querySelector.bind(document));
