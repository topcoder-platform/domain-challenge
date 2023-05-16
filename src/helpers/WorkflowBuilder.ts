interface Payload {
  endpoint: string;
  method: string;
  body: {
    phase: string;
    operation?: "open" | "close";
  };
  authStrategy: string;
}

interface ActionResult {
  action: string;
}

interface Workflow {
  name: string;
  payload: Payload;
  success: ActionResult;
  failure: ActionResult;
}

class WorkflowBuilder {
  private _workflow: Workflow;

  constructor() {
    this._workflow = {
      name: "",
      payload: {
        endpoint: "",
        method: "",
        body: {
          phase: "",
        },
        authStrategy: "",
      },
      success: {
        action: "",
      },
      failure: {
        action: "",
      },
    };
  }

  setName(name: string): WorkflowBuilder {
    this._workflow.name = name;
    return this;
  }

  setPayload(payload: Payload): WorkflowBuilder {
    this._workflow.payload = payload;
    return this;
  }

  setSuccess(success: ActionResult): WorkflowBuilder {
    this._workflow.success = success;
    return this;
  }

  setFailure(failure: ActionResult): WorkflowBuilder {
    this._workflow.failure = failure;
    return this;
  }

  build(): Workflow {
    return this._workflow;
  }
}

export default WorkflowBuilder;
