workflow "Run Tests" {
  on = "push"
  resolves = ["Deploy Notification"]
}

action "npm ci" {
  uses = "docker://node:alpine"
  runs = "npm"
  args = "ci"
}

action "npm test" {
  needs = "npm ci"
  uses = "docker://node:alpine"
  runs = "npm"
  args = "test"
}

action "Deploy Notification" {
  needs = "npm test"
  uses = "apex/actions/slack@master"
  secrets = ["SLACK_WEBHOOK_URL"]
}
