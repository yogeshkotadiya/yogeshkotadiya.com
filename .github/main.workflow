workflow "automerge pull requests on updates" {
  on = "pull_request"
  resolves = ["automerge"]
}

workflow "automerge pull requests on reviews" {
  on = "pull_request_review"
  resolves = ["automerge"]
}

workflow "automerge pull requests on status updates" {
  on = "status"
  resolves = ["automerge"]
}

action "automerge" {
  uses = "pascalgn/automerge-action@1be5a01e5da4af7ee6c5f79c027602c56b18e30a"
  secrets = ["GITHUB_TOKEN"]
  env = {
    LABELS = "!WIP,!work in progress"
    AUTOMERGE = "merge on green"
    AUTOREBASE = "rebase on green"
    MERGE_METHOD = "squash"
  }
}
