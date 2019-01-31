workflow "Build and Deplot" {
  on = "push"
  resolves = ["npm"]
}

action "npm" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "npm run deploy"
}
