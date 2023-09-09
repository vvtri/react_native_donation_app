### CURL Test

1. Test create payment: `curl --location 'http://localhost:5000/create-payment-intent' \
--header 'Content-Type: application/json' \
--data-raw '{
"currency": "USD",
"email": "vtri2016@gmail.com",
"amount": 1000
}'`
