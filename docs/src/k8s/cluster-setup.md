# kubeadm cluster

> [!WARNING]
> workers need the whole prep too, not only the control plane

- swap off for good - kubelet refuses to start with swap:

```fish
sudo swapoff -a
sudo sed -i '/ swap / s/^/#/' /etc/fstab
```

- `overlay`, `br_netfilter` and forwarding:

```fish
printf 'overlay\nbr_netfilter\n' | sudo tee /etc/modules-load.d/containerd.conf
sudo modprobe overlay
sudo modprobe br_netfilter
printf 'net.bridge.bridge-nf-call-iptables = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.ipv4.ip_forward = 1\n' | sudo tee /etc/sysctl.d/99-kubernetes-cri.conf
sudo sysctl --system
```

- `containerd.io` from Docker's repository, `SystemdCgroup = true` in its [config](https://kubernetes.io/docs/setup/production-environment/container-runtimes/#containerd):

```fish
sudo mkdir -p /etc/containerd
sudo containerd config default | sudo tee /etc/containerd/config.toml
```

- `kubeadm`, `kubelet` and `kubectl` from the [Kubernetes repository](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#installing-kubeadm-kubelet-and-kubectl)

## Control plane

- skip kube-proxy - Cilium replaces it:

```fish
sudo kubeadm init --pod-network-cidr=10.244.0.0/16 --skip-phases=addon/kube-proxy
```

- Cilium [with Helm](https://docs.cilium.io/en/stable/installation/k8s-install-helm/#installation-using-helm), then:

```fish
cilium status --wait
kubectl get pods -A
```
