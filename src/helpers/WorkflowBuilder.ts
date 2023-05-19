// TODO: Move to @topcoder-framework/lib-workflow
interface WorkflowPayload {
  [key: string]: any;
}

interface Transform {
  [key: string]: string;
}

interface NextWorkflowConfiguration {
  transform: Transform;
}

interface NextWorkflow {
  workflow: string;
  configuration: NextWorkflowConfiguration;
}

interface Workflow {
  name: string;
  payload: WorkflowPayload;
  success?: NextWorkflow;
  failure?: NextWorkflow;
}

class WorkflowBuilder {
  protected _workflow: Workflow;

  constructor() {
    this._workflow = {
      name: "",
      payload: {},
    };
  }

  setName(name: string): this {
    this._workflow.name = name;
    return this;
  }

  setPayload(payload: WorkflowPayload): this {
    this._workflow.payload = payload;
    return this;
  }

  setSuccess(nextWorkflow: NextWorkflow): this {
    this._workflow.success = nextWorkflow;
    return this;
  }

  setFailure(nextWorkflow: NextWorkflow): this {
    this._workflow.failure = nextWorkflow;
    return this;
  }

  build(): Workflow {
    return this._workflow;
  }
}

export {
  WorkflowPayload,
  Transform,
  NextWorkflowConfiguration,
  NextWorkflow,
  Workflow,
  WorkflowBuilder,
};
