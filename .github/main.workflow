workflow "automerge pull requests on status updates" {
  on = "status"
  resolves = ["automerge"]
}

action "automerge" {
  uses = "pascalgn/automerge-action@1be5a01e5da4af7ee6c5f79c027602c56b18e30a"
  env = {
    LABELS = "!WIP,!work in progress"
    AUTOMERGE = "merge-on-green"
    AUTOREBASE = "rebaseon green"
    MERGE_METHOD = "squash"
  }
  secrets = ["GITHUB_TOKEN"]
}
