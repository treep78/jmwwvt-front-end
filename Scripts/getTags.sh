API="http://localhost:4741"
URL_PATH="/categories"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json"
