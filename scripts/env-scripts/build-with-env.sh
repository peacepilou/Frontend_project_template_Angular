source "$(dirname "$0")/../utils.sh"

get_available_envs() {
    echo "staging"
    echo "production"
}

if [ -z "$1" ]; then
    echo "🚨 No environment specified. Please provide one of the following:"
    get_available_envs | while read env; do
        echo "  → $env"
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
echo_green "🚀 Building for Environment: $1"
echo_separator

ng build --configuration=$1
