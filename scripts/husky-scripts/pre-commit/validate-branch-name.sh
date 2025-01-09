source "$(dirname "$0")/../../utils.sh"

echo
echo_separator_general
echo_yellow "⚡ Running branch name validation..."
echo_separator_general
echo

BRANCH_NAME=$(git symbolic-ref --short HEAD)

BRANCH_PATTERN="^(feature|bugfix|hotfix|test)\/(issue-[0-9]+|no-ref)\/[a-z0-9\-]+$"

if [[ ! $BRANCH_NAME =~ $BRANCH_PATTERN ]]; then
    echo_red "❌ Invalid branch name: '$BRANCH_NAME'"
    echo_red "👉 The branch name has to match this pattern: <category>/<reference>/<description-in-kebab-case>"
    echo_red "👉 Exemple: feature/issue-42/create-new-button-component"
    echo_red "👉 Categories options: feature, bugfix, hotfix, test"
    exit 1
fi

# Si valide
echo_green "✅ Branch name passed checks"
