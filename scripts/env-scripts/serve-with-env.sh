source "$(dirname "$0")/../utils.sh"

get_available_envs() {
    find src/environments -type f -name "environment.*.ts" | sed -E 's/.*environment\.([a-zA-Z0-9_-]+)\.ts/\1/'
}

if [ -z "$1" ]; then
    echo -e "\n🚨 No environment specified. Please provide one of the following:"
    for env in $(get_available_envs); do
        echo -e "  ➡️ $env"
    done
    exit 1
fi

if ! get_available_envs | grep -w -q "$1"; then
    echo "🚨 Invalid environment '$1'. Please choose from:"
    get_available_envs | while read env; do
        echo "  → $env"
    done
    exit 1
fi

echo_separator
echo_green "✨ Starting server for Environment: $1"
echo_separator

ng serve --configuration=$1
